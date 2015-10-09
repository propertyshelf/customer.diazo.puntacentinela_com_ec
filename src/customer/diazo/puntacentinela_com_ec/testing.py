# -*- coding: utf-8 -*-
"""Test Layer for customer.diazo.puntacentinela_com_ec."""

# zope imports
from plone.app.robotframework.testing import REMOTE_LIBRARY_BUNDLE_FIXTURE
from plone.app.testing import (
    FunctionalTesting,
    IntegrationTesting,
    PloneSandboxLayer,
    PLONE_FIXTURE,
    applyProfile,
)
from plone.testing import (
    Layer,
    z2,
)
from zope.configuration import xmlconfig


class CustomerDiazoPuntacentinelaComEcLayer(PloneSandboxLayer):
    """Custom Test Layer for customer.diazo.puntacentinela_com_ec."""
    defaultBases = (PLONE_FIXTURE, )

    def setUpZope(self, app, configurationContext):
        """Set up Zope for testing."""
        # Load ZCML
        import customer.diazo.puntacentinela_com_ec
        xmlconfig.file(
            'configure.zcml',
            customer.diazo.puntacentinela_com_ec,
            context=configurationContext
        )

    def setUpPloneSite(self, portal):
        applyProfile(portal, 'customer.diazo.puntacentinela_com_ec:default')


CUSTOMER_DIAZO_PUNTACENTINELA_COM_EC_FIXTURE = CustomerDiazoPuntacentinelaComEcLayer()


CUSTOMER_DIAZO_PUNTACENTINELA_COM_EC_INTEGRATION_TESTING = IntegrationTesting(
    bases=(CUSTOMER_DIAZO_PUNTACENTINELA_COM_EC_FIXTURE,),
    name='CustomerDiazoPuntacentinelaComEcLayer:IntegrationTesting'
)


CUSTOMER_DIAZO_PUNTACENTINELA_COM_EC_FUNCTIONAL_TESTING = FunctionalTesting(
    bases=(CUSTOMER_DIAZO_PUNTACENTINELA_COM_EC_FIXTURE,),
    name='CustomerDiazoPuntacentinelaComEcLayer:FunctionalTesting'
)


CUSTOMER_DIAZO_PUNTACENTINELA_COM_EC_ACCEPTANCE_TESTING = FunctionalTesting(
    bases=(
        CUSTOMER_DIAZO_PUNTACENTINELA_COM_EC_FIXTURE,
        REMOTE_LIBRARY_BUNDLE_FIXTURE,
        z2.ZSERVER_FIXTURE
    ),
    name='CustomerDiazoPuntacentinelaComEcLayer:AcceptanceTesting'
)


ROBOT_TESTING = Layer(name='customer.diazo.puntacentinela_com_ec:Robot')
