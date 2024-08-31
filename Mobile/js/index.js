const queryString = window.location.search;
console.log(queryString);

function removeBanner() {
    document.getElementById("banner").style.display = "none";
    document.getElementById("menuBar").style.height = "100vh";
    document.getElementById("HomeText").href = '../index.html?hideBanner=true';
    document.getElementById("MyWorksText").href = '../myworks.html?hideBanner=true';
    document.getElementById("GithubText").href = '../github.html?hideBanner=true';
    document.getElementById("ContactText").href = '../contact.html?hideBanner=true';
    document.getElementById("sitetext").href = '../about.html?hideBanner=true';
}

window.onload = function() {
    if (queryString == '?hideBanner=true') {
        removeBanner();
    }
    }

function closeBar() {
    if (document.getElementById("menuBar").style.Width == "75vw") {
        document.getElementById("menuBar").style.Width = "0vw";
    } else if (document.getElementById("menuBar").style.Width == "0vw") {
        console.log("button hit but not visible");
    }
}

function changeTopNav() {
    if (document.getElementById("menuBar").style.width == "0vw") {
        document.getElementById("topNav").style.width = "10vw";
        document.getElementById("topNav").style.marginLeft = "88vw";
        document.getElementById("BarImg").src = "https://dv.artyworks.xyz/imageassets/barhover.png";
    } else if (document.getElementById("menuBar").style.width == "75vw") {
        document.getElementById("topNav").style.marginLeft = "1vw";
        document.getElementById("topNav").style.width = "98vw";
        document.getElementById("BarImg").src = "https://dv.artyworks.xyz/imageassets/bar.png";
    }
}   

function changeBarIconOn() {
    document.getElementById("BarImg").src = "https://dv.artyworks.xyz/imageassets/barhover.png";
}

function changeBarIconOff() {
    document.getElementById("BarImg").src = "https://dv.artyworks.xyz/imageassets/bar.png";
}

document.addEventListener("DOMContentLoaded", function(){
    var button = document.getElementById("menuBarButtonJS");
    var menuBar = document.getElementById('menuBar');
    var topNav = document.getElementById('topNav');
    button.addEventListener('click', function(e){
        e.preventDefault();
        menuBar.classList.toggle('menubar--open');
        topNav.classList.toggle('topNav--hide');
        
        
        
    });  
});function menuBar() {
    if (document.getElementById("menuBar").style.width == "0vw") {
        document.getElementById("menuBar").style.width = "75vw";
    } else if (document.getElementById("menuBar").style.width == "75vw") {
        document.getElementById("menuBar").style.width = "0vw";
    };
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function loop8() {
    document.getElementsByClassName("a6")[0].style.display = "block";
    document.getElementsByClassName("a8")[0].style.right = "154vh";
    document.getElementsByClassName("a1")[0].style.right = "102vh";
    document.getElementsByClassName("a2")[0].style.right = "50vh";
    document.getElementsByClassName("a3")[0].style.right = "0px";
    document.getElementsByClassName("a4")[0].style.right = "-50vh";
    document.getElementsByClassName("a5")[0].style.right = "-102vh";
    document.getElementsByClassName("a6")[0].style.right = "-154vh";
    document.getElementsByClassName("a7")[0].style.display = "none";
    document.getElementsByClassName("a7")[0].style.right = "-206vh";
}

function loop7() {
    document.getElementsByClassName("a5")[0].style.display = "block";
    document.getElementsByClassName("a7")[0].style.right = "154vh";
    document.getElementsByClassName("a8")[0].style.right = "102vh";
    document.getElementsByClassName("a1")[0].style.right = "50vh";
    document.getElementsByClassName("a2")[0].style.right = "0px";
    document.getElementsByClassName("a3")[0].style.right = "-50vh";
    document.getElementsByClassName("a4")[0].style.right = "-102vh";
    document.getElementsByClassName("a5")[0].style.right = "-154vh";
    document.getElementsByClassName("a6")[0].style.display = "none";
    document.getElementsByClassName("a6")[0].style.right = "-206vh";
}

function loop6() {
    document.getElementsByClassName("a4")[0].style.display = "block";
    document.getElementsByClassName("a6")[0].style.right = "154vh";
    document.getElementsByClassName("a7")[0].style.right = "102vh";
    document.getElementsByClassName("a8")[0].style.right = "50vh";
    document.getElementsByClassName("a1")[0].style.right = "0px";
    document.getElementsByClassName("a2")[0].style.right = "-50vh";
    document.getElementsByClassName("a3")[0].style.right = "-102vh";
    document.getElementsByClassName("a4")[0].style.right = "-154vh";
    document.getElementsByClassName("a5")[0].style.display = "none";
    document.getElementsByClassName("a5")[0].style.right = "-206vh";
}

function loop5() {
    document.getElementsByClassName("a3")[0].style.display = "block";
    document.getElementsByClassName("a5")[0].style.right = "154vh";
    document.getElementsByClassName("a6")[0].style.right = "102vh";
    document.getElementsByClassName("a7")[0].style.right = "50vh";
    document.getElementsByClassName("a8")[0].style.right = "0px";
    document.getElementsByClassName("a1")[0].style.right = "-50vh";
    document.getElementsByClassName("a2")[0].style.right = "-102vh";
    document.getElementsByClassName("a3")[0].style.right = "-154vh";
    document.getElementsByClassName("a4")[0].style.display = "none";
    document.getElementsByClassName("a4")[0].style.right = "-206vh";
}

function loop4() {
    document.getElementsByClassName("a2")[0].style.display = "block";
    document.getElementsByClassName("a4")[0].style.right = "154vh";
    document.getElementsByClassName("a5")[0].style.right = "102vh";
    document.getElementsByClassName("a6")[0].style.right = "50vh";
    document.getElementsByClassName("a7")[0].style.right = "0px";
    document.getElementsByClassName("a8")[0].style.right = "-50vh";
    document.getElementsByClassName("a1")[0].style.right = "-102vh";
    document.getElementsByClassName("a2")[0].style.right = "-154vh";
    document.getElementsByClassName("a3")[0].style.display = "none";
    document.getElementsByClassName("a3")[0].style.right = "-206vh";
}

function loop3() {
    document.getElementsByClassName("a1")[0].style.display = "block";
    document.getElementsByClassName("a3")[0].style.right = "154vh";
    document.getElementsByClassName("a4")[0].style.right = "102vh";
    document.getElementsByClassName("a5")[0].style.right = "50vh";
    document.getElementsByClassName("a6")[0].style.right = "0px";
    document.getElementsByClassName("a7")[0].style.right = "-50vh";
    document.getElementsByClassName("a8")[0].style.right = "-102vh";
    document.getElementsByClassName("a1")[0].style.right = "-154vh";
    document.getElementsByClassName("a2")[0].style.display = "none";
    document.getElementsByClassName("a2")[0].style.right = "-206vh";
}

function loop2() {
    document.getElementsByClassName("a8")[0].style.display = "block";
    document.getElementsByClassName("a2")[0].style.right = "154vh";
    document.getElementsByClassName("a3")[0].style.right = "102vh";
    document.getElementsByClassName("a4")[0].style.right = "50vh";
    document.getElementsByClassName("a5")[0].style.right = "0px";
    document.getElementsByClassName("a6")[0].style.right = "-50vh";
    document.getElementsByClassName("a7")[0].style.right = "-102vh";
    document.getElementsByClassName("a8")[0].style.right = "-154vh";
    document.getElementsByClassName("a1")[0].style.display = "none";
    document.getElementsByClassName("a1")[0].style.right = "-206vh";
}

function loop1() {
    document.getElementsByClassName("a7")[0].style.display = "block";
    document.getElementsByClassName("a1")[0].style.right = "154vh";
    document.getElementsByClassName("a2")[0].style.right = "102vh";
    document.getElementsByClassName("a3")[0].style.right = "50vh";
    document.getElementsByClassName("a4")[0].style.right = "0px";
    document.getElementsByClassName("a5")[0].style.right = "-50vh";
    document.getElementsByClassName("a6")[0].style.right = "-102vh";
    document.getElementsByClassName("a7")[0].style.right = "-154vh";
    document.getElementsByClassName("a8")[0].style.display = "none";
    document.getElementsByClassName("a8")[0].style.right = "-206vh";
}

async function runLoad() {
    while (true) {
        loop1();
        await delay(3000);
        loop2();
        await delay(3000);
        loop3();
        await delay(3000);
        loop4();
        await delay(3000);
        loop5();
        await delay(3000);
        loop6();
        await delay(3000);
        loop7();
        await delay(3000);
        loop8();
    }
}

window.addEventListener("load", (event) => {
    runLoad();
});

const GITHUB_API_BASE_URL = 'https://api.github.com';
const DEFAULT_AVATAR_URL = 'https://github.com/images/error/octocat_happy.gif';
const MAX_COMMITS = 8;
const USERNAME = 'arty-airbourne';

const errorMessage = document.getElementById('error-message');
const loadingIndicator = document.getElementById('loading');
const boxes = document.querySelectorAll('.box');

console.log('Script started');

// Load commits when the page loads
document.addEventListener('DOMContentLoaded', fetchRecentCommits);

async function fetchRecentCommits() {
    console.log('Fetching recent commits');
    showLoading(true);
    clearError();
    clearBoxes();

    try {
        const repos = await getRepositories();
        console.log(`Fetched ${repos.length} repositories`);
        let allCommits = await getAllCommits(repos);
        console.log(`Fetched ${allCommits.length} commits in total`);
        allCommits = sortCommitsByDate(allCommits).slice(0, MAX_COMMITS);
        console.log(`Sorted and sliced to ${allCommits.length} commits`);

        if (allCommits.length === 0) {
            showError("No commits found. All repositories might be empty or inaccessible.");
        } else {
            displayCommits(allCommits);
        }
    } catch (error) {
        console.error('Error in fetchRecentCommits:', error);
        showError(`Error: ${error.message}`);
    } finally {
        showLoading(false);
    }
}

async function getRepositories() {
    const url = `${GITHUB_API_BASE_URL}/users/${USERNAME}/repos?per_page=100`;
    console.log(`Fetching repositories from: ${url}`);
    
    const response = await fetch(url);

    if (!response.ok) {
        const errorBody = await response.text();
        console.error(`Error response body: ${errorBody}`);
        throw new Error(`HTTP error! status: ${response.status}, statusText: ${response.statusText}`);
    }

    const repos = await response.json();
    console.log(`Fetched ${repos.length} repositories`);
    return repos;
}

async function getAllCommits(repos) {
    let allCommits = [];
    console.log(repos);
    for (const repo of repos) {
        try {
            console.log(`Fetching commits for ${repo.name}`);
            const commits = await getCommits(repo.name);
            if (commits.length === 0) {
                console.log(`Repository ${repo.name} is empty. Skipping.`);
            } else {
                console.log(`Fetched ${commits.length} commits from ${repo.name}`);
                allCommits = allCommits.concat(commits);
            }
            
            if (allCommits.length >= MAX_COMMITS) {
                console.log(`Reached ${MAX_COMMITS} commits. Stopping.`);
                break;
            }
        } catch (error) {
            console.error(`Error fetching commits for ${repo.name}:`, error.message);
        }
    }

    console.log(`Total commits fetched: ${allCommits.length}`);
    return allCommits;
}

async function getCommits(repo, perPage = 8) {
    const url = `${GITHUB_API_BASE_URL}/repos/${USERNAME}/${repo}/commits?per_page=${perPage}`;
    console.log(`Fetching commits from: ${url}`);
    
    const response = await fetch(url);

    if (response.status === 409) {
        console.log(`Repository ${repo} is empty. Skipping.`);
        return [];
    }

    if (!response.ok) {
        const errorBody = await response.text();
        console.error(`Error response body for ${repo}: ${errorBody}`);
        throw new Error(`HTTP error! status: ${response.status}, statusText: ${response.statusText}`);
    }

    const commits = await response.json();
    console.log(`Fetched ${commits.length} commits from ${repo}`);
    return commits.map(commit => ({
        sha: commit.sha,
        message: commit.commit.message,
        date: new Date(commit.commit.author.date),
        authorName: commit.commit.author.name,
        authorAvatar: commit.author ? commit.author.avatar_url : DEFAULT_AVATAR_URL,
        repoName: repo
    }));
}

function sortCommitsByDate(commits) {
    return commits.sort((a, b) => b.date - a.date);
}


function displayCommits(commits) {
    console.log(`Attempting to display ${commits.length} commits`);
    
    // Log information about the boxes
    console.log('Boxes found:', boxes.length);
    console.log('Boxes:', boxes);

    // If no boxes are found, try to select them again
    if (boxes.length === 0) {
        const reselectedBoxes = document.querySelectorAll('.box');
        console.log('Reselected boxes:', reselectedBoxes.length);
        
        // If boxes are found now, use them
        if (reselectedBoxes.length > 0) {
            displayCommitsInBoxes(commits, reselectedBoxes);
        } else {
            // If still no boxes, create them dynamically
            console.log('No boxes found. Creating them dynamically.');
            const container = document.querySelector('.line') || document.body;
            commits.forEach((commit, index) => {
                const box = document.createElement('div');
                box.className = `box a${index + 1}`;
                container.appendChild(box);
                fillBoxWithCommit(box, commit, index);
            });
        }
    } else {
        // Use the originally found boxes
        displayCommitsInBoxes(commits, boxes);
    }
}

function displayCommitsInBoxes(commits, boxElements) {
    commits.forEach((commit, index) => {
        if (index < boxElements.length) {
            fillBoxWithCommit(boxElements[index], commit, index);
        } else {
            console.log(`No box available for commit ${index + 1}`);
        }
    });
}

function fillBoxWithCommit(box, commit, index) {
    box.innerHTML = `
        <div class="commit-message">${escapeHtml(commit.message.split('\n')[0])}</div>
        <div class="commit-details">
            Repository: ${escapeHtml(commit.repoName)}<br>
            Date: ${commit.date.toLocaleString()}<br>
            SHA: ${commit.sha.substring(0, 7)}
        </div>
        <div class="author-info">
            <img src="${commit.authorAvatar}" alt="${commit.authorName}">
            <span>${escapeHtml(commit.authorName)}</span>
        </div>
    `;
    console.log(`Displayed commit in box ${index + 1}`);
}
function showError(message) {
    console.error('Showing error:', message);
    if (errorMessage) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
    } else {
        console.error('Error element not found in DOM');
    }
}

function clearError() {
    if (errorMessage) {
        errorMessage.textContent = '';
        errorMessage.style.display = 'none';
    }
}

function showLoading(isLoading) {
    if (loadingIndicator) {
        loadingIndicator.style.display = isLoading ? 'block' : 'none';
    } else {
        console.error('Loading indicator not found in DOM');
    }
}

function clearBoxes() {
    console.log('Clearing boxes');
    boxes.forEach((box, index) => {
        if (box) {
            box.innerHTML = '';
            console.log(`Cleared box ${index + 1}`);
        } else {
            console.error(`Box ${index + 1} not found`);
        }
    });
}

function escapeHtml(unsafe) {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
}

console.log('Script ended');
