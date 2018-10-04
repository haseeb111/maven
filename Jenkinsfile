pipeline {
    agent none
    stages { 
        stage('Build'){
            agent { label 'myagent' }
            steps {
                sh "nmcli dev status"
            }
        }
    }
}
