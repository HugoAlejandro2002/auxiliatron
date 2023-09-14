pipeline {
    agent any
    tools {
        nodejs 'node20'
    }
    stages {
        stage('Build') {
            steps {
                sh 'cd client/admin && npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'cd client/admin && npm run test'
            }
        }
        stage('Deploy') {
            steps {
                sh 'Deploying....'
            }
        }
    }
}
