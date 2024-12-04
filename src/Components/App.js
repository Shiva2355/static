import {Component} from 'react'
import './App.css'
import Header from '../Components/Header'
import ProjectItem from '../Components/ProjectItem'
import TabItem from '../Components/TabItem'
import './App.css'

const tabsList = [
  {tabId: 'STATIC', displayText: 'Static'},
  {tabId: 'RESPONSIVE', displayText: 'Responsive'},
  {tabId: 'DYNAMIC', displayText: 'Dynamic'},
]

const projectsList = [
  {
    projectId: 0,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s3-img.png',
    title: 'Music Page',
    description:
      'The music page enables the users to browse through the images of all-time favorite music albums.',
  },
  {
    projectId: 1,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s4-img.png',
    title: 'Tourism Website',
    description:
      'A tourism website enables the user to browse through the images of popular destinations.',
  },
  {
    projectId: 2,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s1-img.png',
    title: 'Advanced Technologies',
    description:
      'A website that gives you a basic understanding of Advanced Technologies.',
  },
  {
    projectId: 4,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r4-img.png',
    title: 'VR Website',
    description:
      'VR Website enables users to explore AR and VR Products and Industry happenings.',
  },
  {
    projectId: 5,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r2-img.png',
    title: 'Food Munch',
    description: 'Food Much Website is a user-centric food tech website.',
  },
  {
    projectId: 6,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r3-img.png',
    title: 'Portfolio',
    description:
      'A portfolio is the best alternative for a resume to showcase your skills to the digital world.',
  },

  {
    projectId: 8,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d3-img.png',
    title: 'Speed Typing Test',
    description:
      'Speed Typing Test Application is capable of calculating the time to type the randomly generated quote.',
  },
  {
    projectId: 9,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d1-img.png',
    title: 'Random Joke Page',
    description:
      'Random Joke Page is an API-based dynamic Web Application that generates a new joke.',
  },
  {
    projectId:11,
    category:"STATIC",
    imageURL:"https://www.interviewbit.com/blog/wp-content/uploads/2021/12/Quiz-Application-380x356.png",
    title:"Quiz App",
    description:"Optionally you can add the ability to give a score to the user at the end of the game"
  },
  {
    projectId:12,
    category:"STATIC",
    imageURL:"https://www.interviewbit.com/blog/wp-content/uploads/2022/01/Temperature-Converter-550x447.png",
    title:"Temperature Converter",
    description:"will involve validation of the user input, using the dropdown menu to know if the input is celsius or Fahrenheit."
  },
  {
    projectId:13,
    category:"STATIC",
    imageURL:"https://www.interviewbit.com/blog/wp-content/uploads/2022/01/Link-Shortener-550x417.png",
    title:"Link Shortener",
    description:"In this project, you will be required to make an API to build short URLs. The functionality will be similar to bitly"
  },
  {
    projectId: 10,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d2-img.png',
    title: 'Sizing An Image',
    description:
      'This is a dynamic web application capable of adjusting the size of an element using DOM manipulations.',
  },
]

class App extends Component {

  
  filterItemsOf=projectsList.filter(each=>(each.category==="STATIC"))
  state = {NewlistItem: this.filterItemsOf}

  SelectionItem = tabId => {
    const Item = projectsList.filter(each => each.category === tabId)
    this.setState({NewlistItem: Item})
  }
  render() {
    const {NewlistItem} = this.state
    return (
      <div>
        <div>{<Header />}</div>
        <div>
          <div>
            <h1 className="project-item-title-main ">Projects</h1>
            <p className="project-item-description">
              Your skills and achievements showcase your strengths and
              abilities. Speak about any new skills or software you learnt to
              perform the project responsibilities.
            </p>
          </div>
          <div className="CenterStates">
            {tabsList.map(eachitem => (
              <ProjectItem
                EachItem={eachitem}
                SelectionItem={this.SelectionItem}
              />
            ))}
          </div>
        </div>

        <div className="project-list-container">
          {NewlistItem.map(each => (
            <TabItem EachItem={each} />
          ))}
        </div>
      </div>
    )
  }
}
export default App
