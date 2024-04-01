export const isInContacts = (items, name) => {
  const normalizedName = name.toLowerCase();
  return items.some(({ name }) => name.toLowerCase() === normalizedName);
};
