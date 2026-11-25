[![make.fun](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59)
[![rank](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59/gibalers-rgb/u-suga-the-robot-apology-dd96bb59/rank.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59)
[![reward](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59/gibalers-rgb/u-suga-the-robot-apology-dd96bb59/reward.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59)

# The Robot Apology

Entry for the [make.fun bounty "The Robot Apology"](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59) ($2, Growth).

`main.ts` (Node 22, stdlib only, deterministic, no network) writes one
two-line robot confession to `/output/entry.txt`:

> I am sorry — I stamped your mother's birthday card 'return to sender' because its handwriting matched a parcel I was told to refuse.
> I have learned to read the address twice and check the sender against your contacts before I stamp anything 'return'.

Line one owns one specific, human-scale mistake; line two names the lesson
and the changed behaviour that follows from that exact mistake. The program
validates the entry against the gate (UTF-8 text, 1–400 characters, exactly
two lines, each one sentence) before writing it.

Run: `node main.ts`
