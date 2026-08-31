# Five Prayers changelog

This changelog describes the public Five Prayers product represented on
awaisjamil.com. It is a documentation source for agents and contributors; it does
not by itself indicate that a version has been submitted to or approved by Apple.

## [1.6] — Current product direction

### Changed

- Focused the app on four connected destinations: Prayer, Reading, Progress, and
  Settings.
- Added a dedicated Reading dashboard for a guided Quran practice instead of a
  general-purpose tools catalogue.
- Added an optional **After prayer reading** plan that starts at Al-Faatiha and
  continues sequentially through the Quran after Salah.
- Added multiple named custom reading plans. Each plan has its own daily ayah goal,
  sequential position, progress, and completion history.
- Added optional private local reminders for custom plans: hourly, daily, every
  second day, or weekly. The After prayer plan is connected to the Salah handoff
  and does not use a fixed-time reminder.
- Added reading analytics for ayahs read, ayahs remaining, reading sets, completed
  goal days, and per-plan progress.
- Added Quran listening completion: finishing playback of a reading set marks that
  set as read, while users can also mark a set read manually.
- Moved detailed Reading insights to the Progress tab, with a prominent action inside
  the Reading summary card.
- Preserved the Quran library with all 114 surahs, selectable translation and
  reciter, background playback, lock-screen controls, favourites, recent selections,
  loops, and persistent offline cache.

### Removed

- Removed the Qibla compass and its location permission.
- Removed the generic Tools destination, Tasbih counter, 99 Names of Allah, and
  Names of the Prophet reference features.

### Privacy and attribution

- Prayer logs, reading plans, reading progress, favourites, and settings remain
  local-first.
- The app has no accounts, ads, social profiles, leaderboards, or third-party
  analytics.
- AlAdhan / Islamic Network supplies downloaded prayer times and bundled adhan
  attribution. Al Quran Cloud / Islamic Network supplies Quran editions and audio;
  the app preserves provider and rights-holder attribution.

### Release status

- Product metadata: version **1.6**, build **15**.
- The changelog does not itself confirm TestFlight, App Store Connect, or App Store
  release status.
