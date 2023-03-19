## Install Keycloak Kubernetes Operator

### Install CRDs
kubectl apply -f https://raw.githubusercontent.com/keycloak/keycloak-k8s-resources/21.0.1/kubernetes/keycloaks.k8s.keycloak.org-v1.yml
kubectl apply -f https://raw.githubusercontent.com/keycloak/keycloak-k8s-resources/21.0.1/kubernetes/keycloakrealmimports.k8s.keycloak.org-v1.yml


### Install Operator
After successful CRD installation, install the Keycloak Operator deployment by running the following command:

kubectl create namespace keycloak
kubectl apply -n keycloak -f https://raw.githubusercontent.com/keycloak/keycloak-k8s-resources/21.0.1/kubernetes/kubernetes.yml

kubectl apply -n keycloak -f postgres.yaml
kubectl apply -n keycloak -f keycloak.yaml


# Basic Kycloak config using Operator
https://www.keycloak.org/operator/basic-deployment
https://www.keycloak.org/operator/advanced-configuration
https://www.keycloak.org/server/all-config


https://developers.google.com/identity/openid-connect/openid-connect#obtainuserinfo