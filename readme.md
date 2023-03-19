## Install Keycloak Kubernetes Operator

### Install CRDs
```
kubectl apply -f https://raw.githubusercontent.com/keycloak/keycloak-k8s-resources/21.0.1/kubernetes/keycloaks.k8s.keycloak.org-v1.yml

kubectl apply -f https://raw.githubusercontent.com/keycloak/keycloak-k8s-resources/21.0.1/kubernetes/keycloakrealmimports.k8s.keycloak.org-v1.yml
```

### Install Operator
After successful CRD installation, install the Keycloak Operator deployment by running the following command:

```
kubectl create namespace keycloak
kubectl apply -n keycloak -f https://raw.githubusercontent.com/keycloak/keycloak-k8s-resources/21.0.1/kubernetes/kubernetes.yml

kubectl apply -n keycloak -f postgres.yaml
kubectl apply -n keycloak -f keycloak.yaml
```


# Basic Keycloak config guide using Operator
https://www.keycloak.org/operator/basic-deployment

https://www.keycloak.org/operator/advanced-configuration

https://www.keycloak.org/server/all-config


https://developers.google.com/identity/openid-connect/openid-connect#obtainuserinfo


## Google Identity Provider config example:
```
"identityProviders": [
  {
    "alias": "google",
    "internalId": "57c3f075-5fed-4c21-b6a0-97620569c871",
    "providerId": "google",
    "enabled": true,
    "updateProfileFirstLoginMode": "on",
    "trustEmail": true,
    "storeToken": false,
    "addReadTokenRoleOnCreate": false,
    "authenticateByDefault": false,
    "linkOnly": false,
    "firstBrokerLoginFlowAlias": "first broker login",
    "config": {
      "offlineAccess": "false",
      "hideOnLoginPage": "false",
      "clientId": "xxxxxxxxxxxxx.apps.googleusercontent.com",
      "acceptsPromptNoneForwardFromClient": "false",
      "disableUserInfo": "false",
      "syncMode": "FORCE",
      "userIp": "false",
      "clientSecret": "xxxxxxxxxxxx",
      "guiOrder": "0"
    }
  }
],
"identityProviderMappers": [
  {
    "id": "52bd14de-d6a7-4411-8f0d-f2b494152091",
    "name": "username",
    "identityProviderAlias": "google",
    "identityProviderMapper": "google-user-attribute-mapper",
    "config": {
      "syncMode": "INHERIT",
      "jsonField": "email",
      "userAttribute": "username"
    }
  },
  {
    "id": "e6127e24-bb2a-46fb-b68c-f30332daa319",
    "name": "firstName",
    "identityProviderAlias": "google",
    "identityProviderMapper": "google-user-attribute-mapper",
    "config": {
      "syncMode": "INHERIT",
      "jsonField": "given_name",
      "userAttribute": "firstName"
    }
  },
  {
    "id": "e004ebdc-a796-4d46-ba01-e7c59a39d1f1",
    "name": "lastName",
    "identityProviderAlias": "google",
    "identityProviderMapper": "google-user-attribute-mapper",
    "config": {
      "syncMode": "INHERIT",
      "jsonField": "family_name",
      "userAttribute": "lastName"
    }
  }
],
```