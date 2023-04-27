export async function fetchGeneratedImages() {
  try {
    const res = await fetch(`https://api.openai.com/v1/images/generations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer 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`,
      },
      body: JSON.stringify({"prompt": "A cute baby sea otter","n": 1,"size": "256x256"}),
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