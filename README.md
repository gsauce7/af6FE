# af6

Anywhere Fitness App

SIGNUP PAGE - User can register as a client OR instructor(with additional Auth Code during signup)
name, email, phone, password, (auth code)

LOGIN PAGE - User/Instructor can login with the registered credentials.

INSTRUCTOR PAGE - Authenticated `Instructor` can create update and delete a `class`. At a minimum, each `class` must have the following properties:

- `Name`
- `Type`
- `Start time`
- `Duration`
- `Intensity level`
- `Location`
- `Current number of registered attendees`
- `Max class size`

USER PAGE - Authenticated client can search for available classes. At a minimum, they must be able to search by the following criteria:

- `class time`
- `class date`
- `class duration`
- `class type`
- `intensity level`
- `class location`
