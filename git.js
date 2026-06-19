//! git/ github
///* distributed vcs
//github,gitlab,bitbucket,..

//*repository
//local
//remote

//*branching
//login
//register
//dashboard

//*bug fix

//* version

//! git commands
//? config
//* git config --global --list
//* git config --global user.name "<username"
////* git config --global user.email "<github_email>"
//* git config --global init.default 'main'

//? intialize local git repo
//* git init //Intialized empty git repository

//? git working flow
//* working directory -->staging area  -> local repo     -> remote repo
//changes              //ready state      //new version

//?
//* git status -->
//* git add <filepath>
//* git add .
//* git commit -m "commit_message"


//? github
//* git remote -v
//* git remote add origin <remote_repo_url>
//* git remote remove origin
//* git push origin <branch_name>  //git push origin main

//? ignore 
//* .gitignore file



//? branching
//* git branch                  //list all branchg
//* git branch <branch_name>   //create  new branch
//* git switch <branch_name>    //switch between branches
//* git checkout <branch_name>    //switch between branches
//* git merge <branch_name>
//* git switch -c <branch_name>  //create and switch to new branch
//* git checkout -b <branch_name>  //create and switch to new branch

//?merge
//* git merge <branch_name>

//* git log
//* git log --oneline

//? rebase
//! main: A -> B -> C -> F -> G
//! test:           C -> D -> E
//! test:           C -> F -> G -> D' -> E'  //rebase

//git rebase <branch>

//? cherry-pick <commit-id>
// git cherry-pick a0c3976
//! main: A -> B -> C -> F -> G
//! fix:            C -> D -> E
//!        A -> B -> C -> F -> G ->D'



//git change in main branch
//git change in main branch
//? merge
//* git merge <branch_name>

//change new branch
//change new branch

//while working in teams
//* git pull origin <branch_name>