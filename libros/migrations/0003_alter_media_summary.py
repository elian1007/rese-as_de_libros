# Generated by Django 4.1 on 2023-07-28 02:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('libros', '0002_media_summary'),
    ]

    operations = [
        migrations.AlterField(
            model_name='media',
            name='summary',
            field=models.CharField(max_length=1000),
        ),
    ]
