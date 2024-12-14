To run keycloak using a Docker container use:

`docker run -p 8080:8080 -e KC_BOOTSTRAP_ADMIN_USERNAME=admin -e KC_BOOTSTRAP_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:26.0.7 start-dev`

Opens in:

`http://localhost:8080/admin/master/console/`
