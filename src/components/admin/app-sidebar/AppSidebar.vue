<template>
  <vuestic-sidebar :hidden="isOpen">
    <template slot="menu">
      <sidebar-link
        :to="{ name: 'dashboard' }">
        <span slot="title">
          <span
            class="sidebar-menu-item-icon vuestic-icon vuestic-icon-dashboard"></span>
          <span>Dashboard</span>
        </span>
      </sidebar-link>
      <sidebar-link-group>
        <span slot="title">
          <span
            class="sidebar-menu-item-icon vuestic-icon vuestic-icon-statistics"></span>
          <span>Statistics</span>
        </span>
        <sidebar-link
          :to="{ name: 'charts' }">
          <span slot="title">
            <span>Chart</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'progress-bars' }">
          <span slot="title">
            <span>Progress Bars</span>
          </span>
        </sidebar-link>
      </sidebar-link-group>
      <sidebar-link-group>
        <span slot="title">
          <span
            class="sidebar-menu-item-icon vuestic-icon vuestic-icon-forms"></span>
          <span>Forms</span>
        </span>
        <sidebar-link
          :to="{ name: 'form-elements' }">
          <span slot="title">
            <span>Form Elements</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'form-wizards' }">
          <span slot="title">
            <span>Form Wizards</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'medium-editor' }">
          <span slot="title">
            <span>Medium Editor</span>
          </span>
        </sidebar-link>
      </sidebar-link-group>
      <sidebar-link
        :to="{ name: 'tables' }">
        <span slot="title">
          <span
            class="sidebar-menu-item-icon vuestic-icon vuestic-icon-tables"></span>
          <span>Tables</span>
        </span>
      </sidebar-link>
      <sidebar-link-group>
        <span slot="title">
          <span
            class="sidebar-menu-item-icon vuestic-icon vuestic-icon-ui-elements"></span>
          <span>UI Elements</span>
        </span>
        <sidebar-link
          :to="{ name: 'typography' }">
          <span slot="title">
            <span>Typography</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'buttons' }">
          <span slot="title">
            <span>Buttons</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'color-pickers' }">
          <span slot="title">
            <span>Color Pickers</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'notifications' }">
          <span slot="title">
            <span>Notifications</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'icons' }">
          <span slot="title">
            <span>Icons</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'spinners' }">
          <span slot="title">
            <span>Spinners</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'grid' }">
          <span slot="title">
            <span>Grid</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'modals' }">
          <span slot="title">
            <span>Modals</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'file-upload' }">
          <span slot="title">
            <span>File Upload</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'tags' }">
          <span slot="title">
            <span>Tags</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'tree-view' }">
          <span slot="title">
            <span>Tree View</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'cards' }">
          <span slot="title">
            <span>Cards</span>
          </span>
        </sidebar-link>
      </sidebar-link-group>
      <sidebar-link
        :to="{ name: 'extra' }">
        <span slot="title">
          <span
            class="sidebar-menu-item-icon vuestic-icon vuestic-icon-extras"></span>
          <span>Extra</span>
        </span>
      </sidebar-link>
      <sidebar-link-group>
        <span slot="title">
          <span
            class="sidebar-menu-item-icon vuestic-icon vuestic-icon-auth"></span>
          <span>Auth</span>
        </span>
        <sidebar-link
          :to="{ name: 'login' }"
          target="_blank"
          :isChildLink="true">
          <span slot="title">
            <span>Login</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'signup' }"
          target="_blank">
          <span slot="title">
            <span>Sign Up</span>
          </span>
        </sidebar-link>
      </sidebar-link-group>
      <sidebar-link-group>
        <span slot="title">
          <span
            class="sidebar-menu-item-icon vuestic-icon vuestic-icon-maps"></span>
          <span>Maps</span>
        </span>
        <sidebar-link
          :to="{ name: 'google-maps' }">
          <span slot="title">
            <span>Google Maps</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'yandex-maps' }">
          <span slot="title">
            <span>Yandex Maps</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'leaflet-maps' }">
          <span slot="title">
            <span>Leaflet Maps</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'bubble-maps' }">
          <span slot="title">
            <span>Bubble Maps</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'line-maps' }">
          <span slot="title">
            <span>Line Maps</span>
          </span>
        </sidebar-link>
      </sidebar-link-group>
    </template>
  </vuestic-sidebar>
</template>

<script>

  import VuesticSidebar from '../../../vuestic-theme/vuestic-components/vuestic-sidebar/VuesticSidebar'
  import SidebarLink from './components/SidebarLink'
  import SidebarLinkGroup from './components/SidebarLinkGroup'

  export default {
    name: 'app-sidebar',
    components: {
      VuesticSidebar,
      SidebarLink,
      SidebarLinkGroup
    },
    props: {
      isOpen: {
        type: Boolean,
        required: true
      }
    }
  }

</script>
