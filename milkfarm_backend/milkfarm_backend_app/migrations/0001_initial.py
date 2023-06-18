# Generated by Django 3.2.12 on 2023-03-23 18:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Member',
            fields=[
                ('member_id', models.AutoField(primary_key=True, serialize=False)),
                ('phone', models.IntegerField(default=0)),
                ('name', models.CharField(max_length=50)),
                ('email', models.CharField(max_length=20)),
                ('address', models.CharField(blank=True, max_length=200, null=True)),
                ('types', models.CharField(choices=[('cow', 'cow'), ('buffalo', 'buffalo')], default=0, max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='TodaysData',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('myname', models.CharField(default=0, max_length=50)),
                ('fat', models.DecimalField(decimal_places=2, max_digits=5)),
                ('snf', models.DecimalField(decimal_places=2, max_digits=5)),
                ('rate', models.DecimalField(decimal_places=2, max_digits=5)),
                ('lit', models.DecimalField(decimal_places=2, max_digits=5)),
                ('date', models.DateField()),
                ('shift', models.CharField(choices=[('morning', 'morning'), ('evening', 'evening')], default=0, max_length=50)),
                ('name', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='milkfarm_backend_app.member')),
            ],
        ),
    ]