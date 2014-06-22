BrandedOperatorPanel
====================

The Branded Operator Panel is just a light-weight dashboard for viewing Asterisk/PBX info.

This is currently a heavily customized piece, but should be easy for a developer to adapt to his or her own purposes. A web worker is used to query data. It's presently brought in from a file, but is easily adapted to rest, or something more WebSockety, like Firebase.

It is worth noting that this is presently adapted for a resolution of 1920x1080, or better, and the user may need to make changes to improve display on other screen sizes. I apologize for this--the BrandedOperatorPanel was born of necessity at the day job, and that has been what drives this development. I don't have a lot of time to refactor the code to be a little more agnostic.