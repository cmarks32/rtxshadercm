{
  "format_version": 2,
  "header": {
    "name": "Vibrant RTX Shader Pack",
    "description": "A vibrant RTX resource pack with colorful sky and stylized blocks.",
    "uuid": "123e4567-e89b-12d3-a456-426614174000",
    "version": [1, 0, 0],
    "min_engine_version": [1, 16, 100]
  },
  "modules": [
    {
      "type": "resources",
      "uuid": "123e4567-e89b-12d3-a456-426614174001",
      "version": [1, 0, 0]
    }
  ]
}
let system = server.registerSystem(0, 0);

system.initialize = function() {
    this.listenForEvent("minecraft:script_logger_config", (eventData) => this.onScriptLoggerConfig(eventData));
    this.broadcastMessage("World Shader Pack loaded!");
};

system.onScriptLoggerConfig = function(eventData) {
    // Example: Modifying the world light intensity
    let world = this.getWorld();
    let worldSettings = world.getWorldSettings();

    // Set the world lighting intensity (example values, adjust as needed)
    worldSettings.setWorldLightIntensity(1.2);
    
    // Adjust the time of day to affect lighting (morning, noon, sunset)
    worldSettings.setTime(12000); // Noon (adjust as needed)

    // You can also manipulate fog, weather, etc.
    worldSettings.setWeather("clear");  // Set clear weather
    
    // Modify fog properties
    worldSettings.setFogDensity(0.5);  // Set fog density (can be used to create an atmosphere)
};
