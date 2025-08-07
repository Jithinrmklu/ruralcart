provider "kubernetes" {
    config_path = "~/.kube/config"
}

resource "kubernetes_deployment" "ruralcart" {
  metadata {
    name = "ruralcart"
    labels = {
      app = "ruralcart"
    }
  }

  spec {
    replicas = 2

    selector {
      match_labels = {
        app = "ruralcart"
      }
    }

    template {
      metadata {
        labels = {
          app = "ruralcart"
        }
      }

      spec {
        container {
          name  = "ruralcart"
          image = "ruralcart:dev"
          port {
            container_port = 80
          }
        }
      }
    }
  }
}

resource "kubernetes_service" "ruralcart" {
  metadata {
    name = "ruralcart"
  }

  spec {
    selector = {
      app = kubernetes_deployment.ruralcart.metadata[0].labels.app
    }

    port {
      port        = 80
      target_port = 80
    }

    type = "NodePort"
  }
  
}