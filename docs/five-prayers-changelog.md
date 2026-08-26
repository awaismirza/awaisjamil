# Five Prayers changelog

This changelog describes the public Five Prayers product represented on
awaisjamil.com. It is a documentation source for agents and contributors; it does
not by itself indicate that a version has been submitted to or approved by Apple.

## [1.5] — Planned

### Added

- **99 Names of Allah** in Tools: browse all 99 Beautiful Names with Arabic text,
  transliteration, English translation, search, and per-name detail screens.
- Arabic pronunciation playback for individual names when the source audio is
  available.
- A local fallback of all 99 Arabic names with transliterations and English
  translations, so the reference remains usable when the source is unavailable.

### Data and privacy

- Uses Asmaul Husna API for the online Arabic names, meanings, and pronunciation
  audio. The feature does not send prayer history, Tasbih history, or Qibla location
  to this source.
- Caches the last valid response locally; expanded meanings and audio may be absent
  until a successful online response is available.

### Release status

- Planned iOS metadata: version **1.5**, build **12**.
- Not yet archived, uploaded to TestFlight, or submitted to App Store Connect.

## [1.4] — Current project baseline

### Added

- Five primary destinations: Prayer, Quran, Qibla, Tools, and Settings.
- City-based prayer times with local cache and static fallback, local reminders,
  selectable bundled adhan recordings, and an optional Fajr alarm.
- Prayer tracking, missed/made-up prayer workflows, progress analytics, and CSV
  export.
- Quran library and reader for all 114 surahs, selectable translation and reciter,
  background playback, lock-screen controls, favourites/recent selections, loops,
  optional spoken translation, and persistent offline cache.
- On-device Qibla direction and distance guidance.
- Tasbih with multiple counters, editable targets, reset/delete, and count history.

### Privacy and attribution

- Local-first data storage with no ads, social profiles, or third-party analytics.
- AlAdhan / Islamic Network for prayer-time data and bundled adhan collection; Al
  Quran Cloud / Islamic Network for Quran content and media, with attribution and
  rights-holder notices in the app.
