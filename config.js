module.exports = {
  BotToken: "", // Your Token
  BotPrefix: "!", // For the only existing command: eval
  BotLanguage: "English", // Supporting "Español", "English" and "Deutch"
  BotIntents: "all", // Recomended keeping it to "all"
  ApiKey: "", // Get one: https://ipqualityscore.com
  
  BotStatus: "your server!", // Bot Status
  StatusType: "WATCHING", // WATCHING, PLAYING, LISTENING...

  SuccessEmoji: ":white_check_mark:", // Good Emoji
  ErrorEmoji: ":x:", // Bad Emoji
  LoadingEmoji: ":satellite:", // Loading Emoji

  LinkScanning: true, // Enable/Disable the link scanning
  IgnoreServerAdmins: true, // Ingore Users with perms?
  CooldownBetweenScans: "10s", // Ignore messages with link during this time
  RespondOnEdit: { // Recomended keeping it like this:
        commands: false,
        alwaysExecute: true,
        nonPrefixed: true
  },

  // Advanced
  Sharding: false,
  ShardCount: 2,
  SuppressPackageErrors: true,
}
