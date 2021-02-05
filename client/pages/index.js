import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import fetchQuiz from './api/fetchQuiz'

class Main extends React.Component
{
  constructor(props)
  {
    super(props)

    this.state = { answer1: "", answer2: "", answer3: "", answer4: "" }

    this.handleQuestionOne = this.handleQuestionOne.bind(this)
    this.handleQuestionTwo = this.handleQuestionTwo.bind(this)
    this.handleQuestionThree = this.handleQuestionThree.bind(this)
    this.handleQuestionFour = this.handleQuestionFour.bind(this)
  }

  componentDidMount()
  {
    this.questions = fetchQuiz()
  }

  handleQuestionOne(event)
  {
    this.setState({ answer1: event.target.value })
    console.log(this.state)
  }

  handleQuestionTwo(event)
  {
    this.setState({ answer2: event.target.value })
    console.log(this.state)
  }

  handleQuestionThree(event)
  {
    this.setState({ answer3: event.target.value })
    console.log(this.state)
  }

  handleQuestionFour(event)
  {
    this.setState({ answer4: event.target.value })
    console.log(this.state)
  }

  render()
  {
    return (
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Point 'n' Pick!
          </h1>

          <div className={styles.grid}>
            <div onChange={this.handleQuestionOne} className={styles.card}>
                <h3>&larr; Which team most recently won the Super Bowl? &rarr;</h3>
                <input type="radio" value="1" name="one" /> First
                <input type="radio" value="2" name="one" /> Second
                <input type="radio" value="3" name="one" /> Third
                <input type="radio" value="4" name="one" /> Fourth
            </div>

            <div onChange={this.handleQuestionTwo} className={styles.card}>
                <h3>&larr; Which player had the highest touchdowns scored in 2020? &rarr;</h3>
                <input type="radio" value="1" name="two" /> First
                <input type="radio" value="2" name="two" /> Second
                <input type="radio" value="3" name="two" /> Third
                <input type="radio" value="4" name="two" /> Fourth
            </div>

            <div onChange={this.handleQuestionThree} className={styles.card}>
                <h3>&larr; Which team has the most Super Bowl wins? &rarr;</h3>
                <p>Discover and deploy boilerplate example Next.js projects.</p>
              </div>

            <div onChange={this.handleQuestionFour} className={styles.card}>
                <h3>&larr; Which player has had the most injuries? &rarr;</h3>
                <p>
                  Instantly deploy your Next.js site to a public URL with Vercel.
                </p>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default Main