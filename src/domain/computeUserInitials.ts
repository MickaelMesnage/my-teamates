export const computeUserInitials = (
  name: string | null,
  email: string | null
) => {
  if (name) {
    const nameSplit = name.split(" ");
    return `${nameSplit[0].charAt(0)}${nameSplit[1].charAt(0)}`;
  }

  if (email) {
    return email.slice(0, 2);
  }

  // jd for John Doe
  return "jd";
};
