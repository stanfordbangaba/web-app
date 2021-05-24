pipeline {
    agent any
    triggers {
        pollSCM('* * * * *')
    }

    environment {
        DOCKER_IMAGE_TAG = "lms-web:0.0.1-SNAPSHOT";
    }

    stages {
        stage("Docker build") {
            steps {
                echo "Build docker image ${env.DOCKER_IMAGE_TAG}"
                sh "docker build -t ${env.DOCKER_IMAGE_TAG} ."
            }
        }
        stage("Deploy App on docker") {
            steps {
                echo "Deploy the app"
                sh 'docker ps -f name=lms-web -q | xargs --no-run-if-empty docker container stop'
                sh 'docker container ls -a -fname=lms-web -q | xargs -r docker container rm'
                sh "docker run --name lms-web -d --restart unless-stopped -p 4200:80 -e API_URL='https://lmscore.cash22online.com' ${env.DOCKER_IMAGE_TAG}"
            }
        }
    }
}


