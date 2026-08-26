# Five Prayers product specification

**Document version:** 1.5 scope

**Status:** current website/product reference; iOS 1.5 / build 12 is planned, not yet
uploaded to TestFlight.

## Product purpose

Five Prayers is a private, local-first iPhone companion for daily Islamic worship. It
helps people track the five daily prayers, read and listen to the Quran, find Qibla,
keep Tasbih counters, and learn the 99 Beautiful Names of Allah. It has no account,
advertising, social feed, leaderboard, or sale of user data.

## Product principles

- Calm, encouraging, respectful, and practical—not a religious authority.
- Local-first: prayer records, Tasbih data, and preferences remain on device.
- Offline-resilient: retain cached prayer schedules, Quran content/audio, and the
  99-name fallback when external sources are unavailable.
- Transparent about data providers, rights, and OS limitations.

## Platforms and release status

- Current platform: iPhone, iOS 17+.
- Current project baseline: 1.4 / build 11.
- Planned scope: 1.5 / build 12, adding 99 Names of Allah. No TestFlight build or
  App Store submission exists for this planned version at the time of writing.

## Navigation

The bottom navigation contains exactly five destinations, in order:

1. Prayer
2. Quran
3. Qibla
4. Tools
5. Settings

The Quran mini player appears above the bottom navigation only while Quran audio is
active. Short 99-name pronunciation playback is separate and does not use that mini
player.

## Prayer

- Onboarding collects tracking start date, selected city, and reminder preference.
- The Prayer tab shows Hijri/Gregorian dates, current/next prayer, a live countdown,
  five prayer rows, and completion progress. Future prayers cannot be marked prayed.
- A selected city uses locally cached AlAdhan calendar schedules. A static schedule is
  retained as a graceful fallback.
- Prayer history supports normal prayer records, derived missed prayers, and separate
  made-up (qada) records. Progress presents rates, streaks, per-prayer breakdowns,
  and oldest-first make-up actions.
- Local notifications, selectable bundled adhan audio, and optional 5/10/15-minute
  pre-Fajr alarm support the daily routine, subject to iOS notification permissions
  and system restrictions.

## Quran

- All 114 surahs, Uthmani Arabic, a selected translation, searchable library,
  favourites, recent surahs, direct playback, and repeatable custom multi-surah loops.
- Users choose an Arabic reciter and can optionally play a provider-supported spoken
  translation after each ayah.
- Quran playback continues in the background with lock-screen and Control Center
  controls. The active ayah is highlighted and can be returned to after browsing.
- Al Quran Cloud / Islamic Network provides Quran editions and media. Selected chapter
  data and played audio are saved in durable private storage for later offline replay.
  Source attribution and rights-holder notices remain visible in the app.

## Qibla

- Uses device location and heading services to calculate the on-device great-circle
  bearing and distance to the Kaaba (`21.422487, 39.826206`).
- Provides compass guidance, direction, and permission recovery. Qibla location is
  not sent to a third-party Qibla service by the app.

## Tools

### Prayer Progress

Shows prayer rate, current/longest streaks, missed and made-up totals, individual
prayer breakdowns, and make-up actions.

### Tasbih

Supports multiple named counters, editable targets, increments, reset/delete actions,
and persistent count history.

### 99 Names of Allah — 1.5

- The list contains 99 names and displays ordinal, Arabic, transliteration, and
  English translation. It can be searched by Arabic, transliteration, translation, or
  supplied meaning.
- Each name has a detail view with large Arabic text, transliteration, English
  translation, expanded meaning where available, and a play/stop pronunciation
  control when audio is available.
- Online source: `https://asmaul-husna-api-coral.vercel.app/api/asmaul-husna?lang=english`.
  The source supplies Arabic, transliteration, English text, meanings, and a per-name
  audio URL.
- The last valid 99-name response is saved locally. A bundled canonical fallback of
  Arabic names, transliterations, and English translations remains available offline.
  Expanded meaning and audio depend on an online response and are hidden when absent.
- The app streams only one name at a time, stops an earlier name when a new one starts,
  and credits the online source. It does not send prayer logs, Tasbih data, Qibla
  location, or account data to the source.

## Settings, data, and privacy

- Settings cover appearance, Arabic visibility, tracking start date, city and prayer
  calculation choices, reminders/Fajr alarm, adhan voice, Quran editions, cache
  management, rights/source information, version, and CSV export.
- Prayer logs, made-up records, Tasbih data, and preferences are stored locally.
- Quran downloads can be deleted in Settings. The 99-name cached response is local
  preference data and the app retains a bundled fallback reference.
- The app has no ads, third-party analytics, user accounts, profiling, or social
  features. Internet requests are limited to the selected content/prayer-time sources
  needed for requested features; providers may receive normal technical request data
  such as IP address under their own terms.

## External services and attribution

| Service | Purpose | Important boundary |
| --- | --- | --- |
| AlAdhan / Islamic Network | City prayer calendars and bundled adhan collection | Prayer times are estimates; users should follow local mosque guidance where needed. |
| Al Quran Cloud / Islamic Network | Quran editions and audio | Recitations/translations remain subject to their respective rights; retain provider attribution. |
| Asmaul Husna API | 99 Names Arabic, translation/meaning, and audio | Availability and per-name audio are not guaranteed; local fallback remains readable. |

## Public-copy rules

- Do not claim the app provides fatwas, religious rulings, or authoritative local
  mosque timing.
- Do not describe Quran translations or recitations as public domain.
- Do not claim 1.5 is on TestFlight or the App Store until its archive/upload status
  is confirmed.
- Match website overview, privacy, terms, support, screenshots, and changelog claims
  to this specification and the authoritative iOS repository.
