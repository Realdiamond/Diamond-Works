/**
 * Calculate reading time from Portable Text content
 * Average reading speed: 200 words per minute
 */
export function calculateReadTime(content: any[]): string {
  if (!content || !Array.isArray(content)) {
    return '1 min read';
  }

  let wordCount = 0;

  // Extract text from all blocks
  content.forEach((block) => {
    if (block._type === 'block' && block.children) {
      block.children.forEach((child: any) => {
        if (child.text) {
          // Count words by splitting on whitespace
          const words = child.text.trim().split(/\s+/).filter((word: string) => word.length > 0);
          wordCount += words.length;
        }
      });
    }
  });

  // Calculate minutes (average 200 words per minute)
  const minutes = Math.max(1, Math.ceil(wordCount / 200));

  return `${minutes} min read`;
}
