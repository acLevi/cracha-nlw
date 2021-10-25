const links = {
  github: 'acLevi',
  youtube: 'channel/UCfxzlEeSa8AZECV7TIQZtRw',
  facebook: 'profile.php?id=100059613443114',
  twitter: 'ajmishka'
}

function changeSocialLinks() {
  for (let li of socialMedias.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${links[social]}`
  }
}

changeSocialLinks()

function getGitHubInfo() {
  const url = `https://api.github.com/users/${links.github}`

  fetch(url).then(response => response.json()).then(data => {
    userAvatar.src = data.avatar_url
    userName.textContent = data.name
    userLink.href = data.html_url
    userLogin.textContent = data.login
    userBio.textContent = data.bio
  })
}

getGitHubInfo()