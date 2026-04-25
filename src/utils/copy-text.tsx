export const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText("ht2004103@gmail.com");
  } catch (err) {
    console.error("Failed to copy text: ", err);
  }
};