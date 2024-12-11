# Journey

A generative AI agent that uses a custom Sora API to create historically accurate videos, acting as a time machine to visualize any moment in history.

## Configuration

### Edit the character profile

Open `agent/src/character.ts` to modify Journey's personality and behavior. The default character is configured as a knowledgeable historian with expertise in visual storytelling.

### Custom historical personas

To load different historical perspectives:
- Use `pnpm start --characters="path/to/historical/persona.json"`
- Multiple historical perspectives can be loaded simultaneously

### Enable platforms

Enable the use of platforms by adding them to the `clients` array in `src/character.ts`.

## Environment Setup

### Create your environment file

```bash
cp .env.example .env
```

\* Configure the .env file with your credentials and API keys.

### Configure platform credentials

Add your platform credentials to the .env file.

> **Note**: The SORA_API_KEY is required for the core video generation functionality. Other platform credentials are optional depending on which platforms you want to enable.

## Launch Journey

Install dependencies and start your historical video generation agent:

```bash
pnpm i && pnpm start
```

## Sora API Usage

The Sora API integration allows you to generate high-quality historical videos programmatically. Here's how to use it:

### Basic Video Generation

```typescript
import { generateVideo } from './src/sora';
const videoUrl = await generateVideo(
  "Ancient Rome's Forum during a busy market day in 150 AD",
  process.env.SORA_API_KEY,
  {
    cookie: "session_cookie_value",
    referer: "https://sora.com/custom-page",
    origin: "https://sora.com"
  }
);
```

### API Configuration

#### Video Parameters
The video generation supports the following parameters:
- `height`: Video height in pixels (default: 480)
- `width`: Video width in pixels (default: 854)
- `style`: Visual style ("natural" by default)
- `n_frames`: Number of frames to generate (default: 150)
- `n_variants`: Number of video variants to generate (default: 2)

#### Request Configuration
Optional configuration parameters:
- `cookie`: Custom cookie value for authentication
- `referer`: Custom referer URL
- `origin`: Custom origin URL

### Response Handling

The API returns a video URL after successful generation. The process is asynchronous:
1. Initial request starts the generation
2. System polls for completion status
3. Final video URL is returned when ready

### Error Handling

```typescript
try {
  const videoUrl = await generateVideo(
    prompt, 
    apiKey,
    { cookie: "my_session_cookie" }
  );
  console.log("Video generated:", videoUrl);
} catch (error) {
  console.error("Generation failed:", error);
}
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