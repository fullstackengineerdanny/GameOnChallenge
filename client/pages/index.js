import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import fetchQuiz from './api/fetchQuiz'

const fetch = require("node-fetch")

class Main extends React.Component
{
  constructor(props)
  {
    super(props)

    this.state = { page: 1, quiz: undefined, answers: [] }

    this.handleQuestionOne = this.handleQuestionOne.bind(this)
    this.handleQuestionTwo = this.handleQuestionTwo.bind(this)
    this.handleQuestionThree = this.handleQuestionThree.bind(this)
    this.handleQuestionFour = this.handleQuestionFour.bind(this)
    this.handlePaging = this.handlePaging.bind(this)
    this.handleChecks = this.handleChecks.bind(this)
    this.generateButton = this.generateButton.bind(this)
  }

  componentDidMount()
  {
    (async () => await fetchQuiz())().then(res => { this.setState({ quiz: res }); this.state.answers.length = this.state.quiz.pages * 4; this.state.answers.fill(0) }).catch(err => console.log(err))
  }

  handleQuestionOne(event)
  {
    this.state.answers[0 + (this.state.page - 1) * 4] = Number(event.target.value)
    console.log(this.state)
  }

  handleQuestionTwo(event)
  {
    this.state.answers[1 + (this.state.page - 1) * 4] = Number(event.target.value)
    console.log(this.state)
  }

  handleQuestionThree(event)
  {
    this.state.answers[2 + (this.state.page - 1) * 4] = Number(event.target.value)
    console.log(this.state)
  }

  handleQuestionFour(event)
  {
    this.state.answers[3 + (this.state.page - 1) * 4] = Number(event.target.value)
    console.log(this.state)
  }

  handlePaging(direction)
  {
    console.log(this.state.answers)
    if (direction === 'backward')
      this.setState({ page: this.state.page - 1 })
    else
      if (direction === 'forward')
        this.setState({ page: this.state.page + 1 })
      else
      {
        async function postData(url = '', data = {})
        {
          const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers:
            {
              'Content-Type': 'application/json'
              //'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data)
          })

          const grade = response.json()
          console.log(grade)
          return grade
        }
        
        postData('http://localhost:8080/grade', { answers: this.state.answers })
          .then(data => alert("You scored " + data.score + " correct!"))
          .catch(error => console.log(error))
      }
  }

  handleChecks(event)
  {
    event.target.checked = event.target.value === this.state.answers[(event.target.name - 1) + (this.state.page - 1) * 4]
    this.setState({ page: this.state.page }) // force it to re-render
    console.log(event.target.checked)
    console.log(event.target.value)
    console.log(`this.state.answers[(${event.target.name - 1}) + (${this.state.page - 1}) * 4]`)
    console.log(this.state.answers[(event.target.name - 1) + (this.state.page - 1) * 4])
  }

  generateButton(symbol)
  {
    if (symbol === '←')
      if (this.state.page === 1)
        return <div></div>
      else
        return <button onClick={() => this.handlePaging('backward')} className={styles.backward}>{symbol + ' to page ' + (this.state.page - 1)}</button>
    else
      if (this.state.page === this.state.quiz.pages)
        return <button onClick={() => this.handlePaging('submit')} className={styles.forward}>Submit!</button>
      else
        return <button onClick={() => this.handlePaging('forward')} className={styles.forward}>{symbol + ' to page ' + (this.state.page + 1)}</button>
  }

  render()
  {
    if(!this.state.quiz)
      console.log(this.state.quiz)
    else
      console.log(this.state.quiz.pages)
    console.log(this.state.page)
    if (this.state.quiz)
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
                  <h3>{this.state.quiz['q' + this.state.page + '1']}</h3>
                  <input type="radio" value={1} name={1} checked={1 == this.state.answers[(this.state.page - 1) * 4]} onChange={this.handleChecks} /> {this.state.quiz['a' + this.state.page + '1'][0]}
                  <br />
                  <input type="radio" value={2} name={1} checked={2 == this.state.answers[(this.state.page - 1) * 4]} onChange={this.handleChecks} /> {this.state.quiz['a' + this.state.page + '1'][1]}
                  <br />
                  <input type="radio" value={3} name={1} checked={3 == this.state.answers[(this.state.page - 1) * 4]} onChange={this.handleChecks} /> {this.state.quiz['a' + this.state.page + '1'][2]}
                  <br />
                  <input type="radio" value={4} name={1} checked={4 == this.state.answers[(this.state.page - 1) * 4]} onChange={this.handleChecks} /> {this.state.quiz['a' + this.state.page + '1'][3]}
              </div>

              <div onChange={this.handleQuestionTwo} className={styles.card}>
                  <h3>{this.state.quiz['q' + this.state.page + '2']}</h3>
                  <input type="radio" value={1} name={2} checked={1 == this.state.answers[1 + (this.state.page - 1) * 4]} onChange={this.handleChecks} /> {this.state.quiz['a' + this.state.page + '2'][0]}
                  <br />
                  <input type="radio" value={2} name={2} checked={2 == this.state.answers[1 + (this.state.page - 1) * 4]} onChange={this.handleChecks} /> {this.state.quiz['a' + this.state.page + '2'][1]}
                  <br />
                  <input type="radio" value={3} name={2} checked={3 == this.state.answers[1 + (this.state.page - 1) * 4]} onChange={this.handleChecks} /> {this.state.quiz['a' + this.state.page + '2'][2]}
                  <br />
                  <input type="radio" value={4} name={2} checked={4 == this.state.answers[1 + (this.state.page - 1) * 4]} onChange={this.handleChecks} /> {this.state.quiz['a' + this.state.page + '2'][3]}
              </div>

              <div onChange={this.handleQuestionThree} className={styles.card}>
                  <h3>{this.state.quiz['q' + this.state.page + '3']}</h3>
                  <input type="radio" value={1} name={3} checked={1 == this.state.answers[2 + (this.state.page - 1) * 4]} onChange={this.handleChecks} /> {this.state.quiz['a' + this.state.page + '3'][0]}
                  <br />
                  <input type="radio" value={2} name={3} checked={2 == this.state.answers[2 + (this.state.page - 1) * 4]} onChange={this.handleChecks} /> {this.state.quiz['a' + this.state.page + '3'][1]}
                  <br />
                  <input type="radio" value={3} name={3} checked={3 == this.state.answers[2 + (this.state.page - 1) * 4]} onChange={this.handleChecks} /> {this.state.quiz['a' + this.state.page + '3'][2]}
                  <br />
                  <input type="radio" value={4} name={3} checked={4 == this.state.answers[2 + (this.state.page - 1) * 4]} onChange={this.handleChecks} /> {this.state.quiz['a' + this.state.page + '3'][3]}
                </div>

              <div onChange={this.handleQuestionFour} className={styles.card}>
                  <h3>{this.state.quiz['q' + this.state.page + '4']}</h3>
                  <input type="radio" value={1} name={4} checked={1 == this.state.answers[3 + (this.state.page - 1) * 4]} onChange={this.handleChecks} /> {this.state.quiz['a' + this.state.page + '4'][0]}
                  <br />
                  <input type="radio" value={2} name={4} checked={2 == this.state.answers[3 + (this.state.page - 1) * 4]} onChange={this.handleChecks} /> {this.state.quiz['a' + this.state.page + '4'][1]}
                  <br />
                  <input type="radio" value={3} name={4} checked={3 == this.state.answers[3 + (this.state.page - 1) * 4]} onChange={this.handleChecks} /> {this.state.quiz['a' + this.state.page + '4'][2]}
                  <br />
                  <input type="radio" value={4} name={4} checked={4 == this.state.answers[3 + (this.state.page - 1) * 4]} onChange={this.handleChecks} /> {this.state.quiz['a' + this.state.page + '4'][3]}
              </div>

              {this.generateButton('←')}
              {this.generateButton('→')}
            </div>
          </main>
        </div>
      )
      else
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
                Loading...
              </div>
            </main>
          </div>
        )
  }
}

export default Main