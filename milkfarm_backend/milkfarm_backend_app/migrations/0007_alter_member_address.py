# Generated by Django 4.1.4 on 2023-05-27 17:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('milkfarm_backend_app', '0006_alter_member_address_alter_member_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='member',
            name='address',
            field=models.CharField(max_length=200, null=True),
        ),
    ]
