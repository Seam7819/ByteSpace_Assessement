export function getPhotoUrl(id: string, width = 800) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
}
