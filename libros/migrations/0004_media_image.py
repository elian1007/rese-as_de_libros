# Generated by Django 4.1 on 2023-07-28 03:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('libros', '0003_alter_media_summary'),
    ]

    operations = [
        migrations.AddField(
            model_name='media',
            name='image',
            field=models.ImageField(default=1, upload_to='albums/images/'),
            preserve_default=False,
        ),
    ]