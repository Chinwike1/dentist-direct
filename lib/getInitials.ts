export default function GetInitials(str: string) {
  const names = str.split(' ')
  console.log(names)
  const firstname = names[0]
  const lastname = names[1]
  const firstnameInitials = firstname.substring(0, 1)
  const lastnameInitials = lastname.substring(0, 1)
  return `${firstnameInitials}${lastnameInitials}`
}
