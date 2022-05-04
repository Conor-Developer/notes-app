class GithubView {
  constructor(model, api) {
    this.model = model;
    this.api = api;

    const submitButtonEl = document.querySelector('#submit-button');
    const repoInputEl = document.querySelector('#repo-name-input');

    submitButtonEl.addEventListener('click', () => {
      const repoName = repoInputEl.value;

      this.api.getRepoInfo(repoName, repoData => {
        this.model.setRepoInfo(repoData);
        console.log(repoData);
        this.clearDisplay();
        this.display();
        repoInputEl.value = " "
      });
    });
  }

  display() {
    const getData = this.model.getRepoInfo();
    const repoName = document.querySelector("#repo-name");
    const newElement = document.createElement('p')
    newElement.innerText = getData.full_name
    newElement.className = 'repo-name'
    repoName.append(newElement)

    const repoDescription = document.querySelector("#repo-description");
    const descriptionElement = document.createElement('p')
    descriptionElement.innerText = getData.description 
    descriptionElement.className = 'repo-description'
    repoDescription.append(descriptionElement)

    const repoImage = document.querySelector("#repo-image");
    const imageElement = document.createElement('img')
    imageElement.src = getData.organization.avatar_url
    imageElement.className = 'repo-image'
    repoImage.append(imageElement)
  }

  clearDisplay() {
    document.querySelectorAll('p.repo-name').forEach((element) => element.remove());
    document.querySelectorAll('p.repo-description').forEach((element) => element.remove());
    document.querySelectorAll('img.repo-image').forEach((element) => element.remove());
  }

}

// First step - Getting the data
// Second - Select where you want to add/show the data
// Third - Create a new element inside the container 

module.exports = GithubView;