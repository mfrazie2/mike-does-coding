export default function renderTimeToRead(minutesToRead) {
    if (minutesToRead < 1) return null;
    const suffix = minutesToRead > 1 ? 'minutes' : 'minute';
    return `About ${minutesToRead} ${suffix} to read`;
  }