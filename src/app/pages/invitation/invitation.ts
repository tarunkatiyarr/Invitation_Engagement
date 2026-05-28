import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-invitation',
  imports: [CommonModule],
  templateUrl: './invitation.html',
  styleUrl: './invitation.scss',
  standalone: true
})
export class Invitation implements OnInit, OnDestroy {

  hearts = Array(20);
  isIOS: boolean = false;
  isAndroid: boolean = false;
  isMac: boolean = false;
  isWindows: boolean = false;
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  private countdownInterval: any;

    constructor(
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.startCountdown();

    const userAgent = navigator.userAgent;

    // iPhone/iPad
    this.isIOS = /iPad|iPhone|iPod/.test(userAgent);

    // Android
    this.isAndroid = /android/i.test(userAgent);

    // Mac
    this.isMac = /Macintosh/i.test(userAgent);

    // WIndows
    this.isWindows = /Windows/i.test(userAgent);

  }

  openMap() {

    const location = 'Shiv Shambhu Party Lawn GT Road Araul';

    if (this.isIOS || this.isMac) {

      // Apple Maps
      window.open(
        `https://maps.apple.com/?q=${encodeURIComponent(location)}`,
        '_blank'
      );

    } else {

      // Google Maps
      window.open(
        `https://www.google.com/maps?q=${encodeURIComponent(location)}`,
        '_blank'
      );
    }
  }

  openCalendar() {

    const title = 'Tarun & Diksha Engagement';
    const location = 'Shiv Shambhu Party Lawn GT Road Araul';

    const startDate = '20260619T083000Z';
    const endDate = '20260619T143000Z';

    if (this.isIOS || this.isMac) {

      // Apple Calendar compatible ICS file
      const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${startDate}
DTEND:${endDate}
SUMMARY:${title}
LOCATION:${location}
END:VEVENT
END:VCALENDAR
`;

      const blob = new Blob(
        [icsContent],
        { type: 'text/calendar;charset=utf-8' }
      );

      const url = window.URL.createObjectURL(blob);

      const link = document.createElement('a');

      link.href = url;
      link.download = 'engagement-invitation.ics';

      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);

    } else {

      // Android / Desktop Google Calendar
      window.open(
        `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDate}/${endDate}&location=${encodeURIComponent(location)}`,
        '_blank'
      );
    }
  }




  startCountdown(): void {

    const targetDate = new Date(
      '2026-06-19T14:00:00'
    ).getTime();

    this.countdownInterval = setInterval(() => {

      const now = new Date().getTime();

      const distance = targetDate - now;

      if (distance <= 0) {

        clearInterval(this.countdownInterval);

        return;
      }

      this.days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
      );

      this.hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
      );

      this.minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
      );

      this.seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
      );

      // IMPORTANT
      this.cdr.detectChanges();

    }, 1000);

  }

  ngOnDestroy(): void {

    clearInterval(this.countdownInterval);

  }

}
