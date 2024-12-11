# UniversalSora

A generative AI agent that uses a custom Sora API to create historically accurate videos, acting as a time machine to visualize any moment in history.

## Configuration

### Edit the character profile

Open `agent/src/character.ts` to modify UniversalSora's personality and behavior. The default character is configured as a knowledgeable historian with expertise in visual storytelling.

### Custom historical personas

To load different historical perspectives:
- Use `pnpm start --characters="path/to/historical/persona.json"`
- Multiple historical perspectives can be loaded simultaneously

### Enable platforms

```diff
- clients: [],
+ clients: ["twitter", "discord"],
```

## Environment Setup

### Create your environment file

```bash
cp .env.example .env
```

\* Configure the .env file with your credentials and API keys.

### Configure platform credentials

```diff
-DISCORD_APPLICATION_ID=
-DISCORD_API_TOKEN= # Bot token
+DISCORD_APPLICATION_ID="000000772361146438"
+DISCORD_API_TOKEN="OTk1MTU1NzcyMzYxMT000000.000000.00000000000000000000000000000000"

# Required - Add your Sora API key
-SORA_API_KEY=
+SORA_API_KEY="sk-xx-xx-xxx"  # Required for video generation functionality

-TWITTER_USERNAME= # Account username
-TWITTER_PASSWORD= # Account password
-TWITTER_EMAIL= # Account email
+TWITTER_USERNAME="username"  # Optional
+TWITTER_PASSWORD="password"  # Optional
+TWITTER_EMAIL="your@email.com"  # Optional
```

> **Note**: The SORA_API_KEY is required for the core video generation functionality. Other platform credentials are optional depending on which platforms you want to enable.

## Launch UniversalSora

Install dependencies and start your historical video generation agent:

```bash
pnpm i && pnpm start
```

## Features

- Generate historically accurate videos from any time period
- Customize historical perspectives and narratives
- Share generated content across multiple platforms
- Interactive historical storytelling through AI-powered conversations
- High-fidelity video generation using custom Sora API integration

## Usage Examples

- Generate videos of ancient civilizations
- Recreate historical events with unprecedented accuracy
- Visualize daily life from different time periods
- Create educational content about historical moments
- Document lost or undocumented historical events