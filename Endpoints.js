Homey/Homeyscript Endpoints:

# Alarms
GET http://<HOMEY_IP>/api/manager/alarms/alarm/
await Homey.alarms.getAlarms()

# Apps
GET http://<HOMEY_IP>/api/manager/apps/app/
GET http://<HOMEY_IP>/api/manager/apps/app/<APP_ID>/ (eg. com.fibaro)
await Homey.apps.getApps()

# Cloud state
GET http://<HomeyIP>/api/manager/cloud/state/

# Devices
GET http://<HOMEY_IP>/api/manager/devices/device/
GET http://<HOMEY_IP>/api/manager/devices/device/<DEVICE_ID>/
await Homey.devices.getDevices()

# Drivers
GET http://<HOMEY_IP>/api/manager/devices/drivers/
GET http://<HOMEY_IP>/api/manager/drivers/pairsession/
await Homey.drivers.getDrivers()

# Experiments
GET http://<HOMEY_IP>/api/manager/experiments/experiment/

# Flow
GET http://<HOMEY_IP>/api/manager/flow/flow/
GET http://<HOMEY_IP>/api/manager/flow/flow/<FLOW_ID>/
await Homey.flow.getFlows()

# Flow folders
GET http://<HOMEY_IP>/api/manager/flow/flowfolder/
await Homey.flow.getFolders()

# Flow tokens
GET http://<HOMEY_IP>/api/manager/flowtoken/flowtoken/
await Homey.flow.getTokens()

# Images
GET http://<HOMEY_IP>/api/manager/images/image/

# Insights
GET http://<HOMEY_IP>/api/manager/insights/log/
await Homey.insights.getLogs()

# Language and unit settings
GET http://<HOMEY_IP>/api/manager/i18n/

# LED ring
GET http://<HOMEY_IP>/api/manager/ledring/screensaver/
GET http://<HOMEY_IP>/api/manager/ledring/state/
await Homey.ledring.getScreensaver()
await Homey.ledring.getState()

# Location
GET http://<HOMEY_IP>/api/manager/geolocation/

# Logic
GET http://<HOMEY_IP>/api/logic/variable/
GET http://<HOMEY_IP>/api/logic/variable/<VARIABLE_ID>/
PUT { "value": value } TO http://<HOMEY_IP>/api/manager/logic/variable/<VARIABLE_ID>/ 

# Mobile
GET http://<HOMEY_IP>/api/manager/mobile/

# Notifications
GET http://<HOMEY_IP>/api/manager/notifications/notification/
GET http://<HOMEY_IP>/api/manager/notifications/owner/
await Homey.notifications.getNotifications()

# Presence
GET http://<HOMEY_IP>/api/manager/presence/

# Reminders
GET http://<HOMEY_IP>/api/manager/reminder/reminder/
await Homey.reminder.getReminders()

# Sessions
GET http://<HOMEY_IP>/api/manager/sessions/session/

# Switch on:
PUT { "value": true } TO http://<HOMEY_IP>/api/manager/devices/device/<DEVICE_ID>/capability/onoff/

# Switch off:
PUT { "value": false } TO http://<HOMEY_IP>/api/manager/devices/device/<DEVICE_ID>/capability/onoff/

# System
GET https://<HOMEY_IP>/api/manager/system/
await Homey.system.getInfo()

# System Reboot // Use with caution!
POST https://<HOMEY_IP>/api/manager/system/reboot/

# Users
GET http://<HOMEY_IP>/api/manager/users/user/
GET http://<HOMEY_IP>/api/manager/users/user/<USER_ID>/
GET http://<HOMEY_IP>/api/manager/users/state/
await Homey.users.getUsers()

# Weather
GET http://<HOMEY_IP>/api/manager/weather/weather/

# Zigbee
GET http://<HOMEY_IP>/api/manager/zigbee/state/

# Z-Wave
GET http://<HOMEY_IP>/api/manager/zwave/state/
GET http://<HOMEY_IP>/api/manager/zwave/log/
await Homey.zwave.getLog()

# Zones
GET http://<HOMEY_IP>/api/manager/zones/
GET http://<HOMEY_IP>/api/manager/zones/<ZONE_ID>/
await Homey.zones.getZones()
