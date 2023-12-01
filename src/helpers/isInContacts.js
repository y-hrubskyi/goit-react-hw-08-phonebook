export const isInContacts = (items, name) => {
  const formattedName = name.toLowerCase();
  return items.some(({ name }) => name.toLowerCase() === formattedName);
};
