export async function fetchGeneratedImages(prompt) {
  try {
    const res = await fetch(`https://api.openai.com/v1/images/generations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({"prompt": prompt,"n": 1,"size": "256x256"}),
    });
    if (!res.ok) {
      throw new Error(`There is a problem retrieving the images`);
    }
    const { data } = await res.json();
    return data;
  } catch (error) {
    return error;
  }
}