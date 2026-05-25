import type { PersonalInfo } from '../types'

export function renderHeaderSidebar(info: PersonalInfo): string {
  return `
    <img src="${info.profilePicture}" alt="profile_picture" class="object-cover rounded-lg h-24 mb-1">
    <p class="font-bold text-sm">${info.title}</p>
    <a class="text-xs -mt-3" href="mailto:${info.email}">${info.email}</a><br>
    <p class="text-xs">${info.phone}</p>
    <p class="text-xs">${info.location}</p>
  `
}

export function renderHeaderMain(info: PersonalInfo): string {
  return `
    <h1 class="font-bold text-3xl text-center">${info.fullName}</h1>
    <div class="rounded-2xl bg-gray-200 px-4 py-2">
      <h2 class="text-lg font-bold">Profile</h2>
      <p class="text-xs">${info.profile}</p>
    </div>
  `
}
