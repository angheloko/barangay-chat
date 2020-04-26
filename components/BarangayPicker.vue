<template>
  <div class="p-4">
    <div class="form-control">
      <label class="form-control__label">
        Region
      </label>
      <multiselect
        v-model="region"
        track-by="id"
        :options="regions"
        :custom-label="optionLabel"
        @input="setProvinces"
      >
        <template slot="singleLabel" slot-scope="{ option }">
          {{ option.name }}
        </template>
        <template slot="option" slot-scope="{ option }">
          {{ option.name }}
        </template>
      </multiselect>
    </div>
    <div class="form-control">
      <label class="form-control__label">
        Province
      </label>
      <multiselect
        v-model="province"
        track-by="id"
        :options="provinceOptions"
        :custom-label="optionLabel"
        @input="setMunicipalities"
      >
        <template slot="singleLabel" slot-scope="{ option }">
          {{ option.name }}
        </template>
        <template slot="option" slot-scope="{ option }">
          {{ option.name }}
        </template>
      </multiselect>
    </div>
    <div class="form-control">
      <label class="form-control__label">
        Municipality
      </label>
      <multiselect
        v-model="municipality"
        track-by="id"
        :options="municipalityOptions"
        :custom-label="optionLabel"
        @input="setBarangays"
      >
        <template slot="singleLabel" slot-scope="{ option }">
          {{ option.name }}
        </template>
        <template slot="option" slot-scope="{ option }">
          {{ option.name }}
        </template>
      </multiselect>
    </div>
    <div class="form-control">
      <label class="form-control__label">
        Barangay
      </label>
      <multiselect
        v-model="barangay"
        track-by="id"
        :options="barangayOptions"
        :custom-label="optionLabel"
      >
        <template slot="singleLabel" slot-scope="{ option }">
          {{ option.name }}
        </template>
        <template slot="option" slot-scope="{ option }">
          {{ option.name }}
        </template>
      </multiselect>
    </div>
  </div>
</template>
<script>
import Multiselect from 'vue-multiselect'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'BarangayPicker',
  components: { Multiselect },
  data () {
    return {
      region: null,
      province: null,
      municipality: null,
      barangay: null,
      provinceOptions: [],
      municipalityOptions: [],
      barangayOptions: []
    }
  },
  computed: {
    ...mapGetters({
      regions: 'region/regions',
      provinces: 'province/provinces',
      municipalities: 'municipality/municipalities',
      barangays: 'barangay/barangays'
    })
  },
  mounted () {
    this.getRegions()
  },
  methods: {
    ...mapActions({
      getRegions: 'region/getRegions',
      getProvinces: 'province/getProvinces',
      getMunicipalities: 'municipality/getMunicipalities',
      getBarangays: 'barangay/getBarangays'
    }),
    async setProvinces () {
      this.province = null
      this.municipality = null
      this.barangay = null

      this.provinceOptions = []
      this.municipalityOptions = []
      this.barangayOptions = []

      if (this.region) {
        await this.getProvinces(this.region.id)
        this.provinceOptions = this.provinces(this.region.id)
      }
    },
    async setMunicipalities () {
      this.municipality = null
      this.barangay = null

      this.municipalityOptions = []
      this.barangayOptions = []

      if (this.region && this.province) {
        await this.getMunicipalities({
          regionId: this.region.id,
          provinceId: this.province.id
        })
        this.municipalityOptions = this.municipalities(this.region.id, this.province.id)
      }
    },
    async setBarangays () {
      this.barangay = null
      this.barangayOptions = []

      if (this.region && this.province && this.municipality) {
        await this.getBarangays({
          regionId: this.region.id,
          provinceId: this.province.id,
          municipalityId: this.municipality.id
        })
        this.barangayOptions = this.barangays(this.region.id, this.province.id, this.municipality.id)
      }
    },
    optionLabel ({ name }) {
      return name
    }
  }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
