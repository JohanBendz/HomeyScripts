// How to get info from Homey
// let variable =  
await Homey.system.getInfo();
await Homey.apps.getApps();
await Homey.flow.getFolders();
await Homey.flow.getTokens();
await Homey.flow.getFlowFolders(); // v1 Homey.flow.getFolders();
await Homey.flowToken.getFlowTokens(); // v1 Homey.flow.getTokens()
await Homey.flow.getFlows();
await Homey.zones.getZones();
await Homey.devices.getDevices();
await Homey.alarms.getAlarms();
await Homey.users.getUsers();
await Homey.apps.getApp({ id: 'APP ID HERE' } );
