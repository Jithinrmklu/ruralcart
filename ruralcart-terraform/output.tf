output "node_port" {
  value = kubernetes_service.ruralcart.spec[0].port[0].node_port
}
