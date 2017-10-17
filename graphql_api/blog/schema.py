import graphene

from graphene_django.types import DjangoObjectType

from blog.models import Post

import logging

class PostType(DjangoObjectType):
    class Meta:
        model = Post

class Query(graphene.AbstractType):
    all_posts = graphene.List(PostType)

    def resolve_all_posts(self, info, *args):
        return Post.objects.all()
