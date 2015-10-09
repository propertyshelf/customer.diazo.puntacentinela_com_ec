# -*- coding: utf-8 -*-
"""Propertyshelf Punta Centinala Theme."""

# python imports
import logging

# zope imports
from zope.i18nmessageid import MessageFactory

# local imports
from customer.diazo.puntacentinela_com_ec import config

logger = logging.getLogger(config.PROJECT_NAME)
_ = MessageFactory('customer.diazo.puntacentinela_com_ec')


def initialize(context):
    """Initializer called when used as a Zope 2 product."""
