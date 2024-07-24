const useThree = (data) => {
  if (data) {
    // chunksni array qilish uchun
    // Array.from({ length: 3  } nechta array bo'lishi
    const chunks = Array.from({ length: 3 }, (_) => []);
    // objlarni push qilish uchun
    data.forEach((value, index) => {
      chunks[index % chunks.length].push(value);
    });
    return chunks;
  }
};

export default useThree;
