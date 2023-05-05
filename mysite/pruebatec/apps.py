from django.apps import AppConfig


class PruebatecConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'pruebatec'
    def ready(self):
        import pruebatec.signals
