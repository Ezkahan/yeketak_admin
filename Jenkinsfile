pipeline{
    agent any
    stages{
        stage("build") {
            steps{
                echo "========executing build========"
                sh "sudo yarn"
                sh "sudo yarn build"
            }
        }

        stage("deploy") {
            steps {
                echo "========executing deploy========"
                sh "sudo rm -rf /var/www/yeketak.com.tm/admin"
                sh "sudo cp -r ${WORKSPACE}/build/ /var/www/yeketak.com.tm/admin"
            }
        }
    }
}