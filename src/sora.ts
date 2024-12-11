import axios from 'axios';

export const generateVideo = async (prompt: string, token: string): Promise<string> => {
  const baseUrl = "https://sora.com/backend";
  const payload = {
    type: "video_gen",
    prompt: prompt,
    height: 480,
    width: 854,
    style: "natural",
    n_frames: 150,
    n_variants: 2,
    operation: "simple_compose",
    inpaint_items: []
  };

  try {
    // Initial video generation request
    const genResponse = await axios.post(`${baseUrl}/video_gen`, payload, {
      headers: {
        "Accept": "*/*",
        "Accept-Encoding": "gzip, deflate, br, zstd",
        "Accept-Language": "en-US,en;q=0.9",
        "Authorization": `Bearer ${token}`
      }
    });

    const videoKey = genResponse.data.video_key;
    
    // Poll for video completion
    while (true) {
      const completionResponse = await axios.get(`${baseUrl}/video_completion`, {
        params: { video_key: videoKey },
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });

      const { status, video_url } = completionResponse.data;
      
      if (status === 'completed' && video_url) {
        return video_url;
      } else if (status === 'failed') {
        throw new Error('Video generation failed');
      }

      // Wait for 2 seconds before polling again
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};