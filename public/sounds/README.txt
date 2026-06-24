TODO: Add soft notification sound file at public/sounds/soft-notification.mp3

Requirements for that file, per the brief that introduced it:
- Short premium notification chime, roughly 0.5-1 second long
- Soft and subtle, not a harsh alarm sound
- Played once (not looped) at low volume (0.25) when the internship onboarding
  modal first appears (src/components/shared/InternshipOnboardingModal.tsx)

Until that file exists, the modal still works correctly: the play() call fails
silently (caught and ignored) and the modal's visual animation (the ringing bell
icon) still shows normally — audio is a nice-to-have layered on top, not a
dependency for the modal to function.

This placeholder file itself is not audio and is not referenced by any code —
delete it once the real soft-notification.mp3 is added here.
